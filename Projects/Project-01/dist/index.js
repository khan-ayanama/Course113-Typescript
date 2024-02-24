"use strict";
const getUsername = document.querySelector("#user");
const formSubmit = document.querySelector("#form");
const mainContainer = document.querySelector(".main-container");
// API Function
async function myCustomFetch(url, option) {
    const response = await fetch(url, option);
    if (!response.ok) {
        throw new Error(`Network response is not ok - status: ${response.status}`);
    }
    const data = await response.json();
    return data;
}
// Display UI Cards
const showResultUI = (user) => {
    const { avatar_url, login, url } = user;
    mainContainer.insertAdjacentHTML("beforeend", `<div class='card'>
        <img src="${avatar_url}" alt="${login}"/>
        <div class="card-footer">
            <img src="${avatar_url}": alt="${login}"/>
            <a href="${url}"">${login}</a>
        </div>
    </div>`);
};
function fetchUserData(url) {
    myCustomFetch(url, {}).then((userInfo) => {
        for (const user of userInfo) {
            showResultUI(user);
        }
    });
}
// Default Function call
fetchUserData("https://api.github.com/users");
formSubmit.addEventListener("submit", async (e) => {
    e.preventDefault();
    const srchTxt = getUsername.value.toLowerCase();
    try {
        const url = "https://api.github.com/users";
        const allUserData = await myCustomFetch(url, {});
        const matchingUsers = allUserData.filter((user) => {
            return user.login.toLowerCase().includes(srchTxt);
        });
        mainContainer.innerHTML = "";
        if (matchingUsers.length == 0) {
            mainContainer?.insertAdjacentHTML("beforeend", `<p class="empty">No Matching User Found</p>`);
        }
        else {
            for (const user of matchingUsers) {
                showResultUI(user);
            }
        }
    }
    catch (error) {
        throw new Error("Users Not Found!!");
    }
});
