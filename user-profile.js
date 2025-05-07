function createProfile() {
    const name = prompt("Enter your name:");
    const age = prompt("Enter your age:");
    const email = prompt("Enter your email:");

    const profile = {
        name: name,
        age: age,
        email: email
    };

    console.log("User Profile:");
    console.log(profile);
}

createProfile();
