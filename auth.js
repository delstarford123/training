// Global Configuration
const admins = ['iigsmartfarmersltd@gmail.com', 'delstarfordisaiah@gmail.com'];

// Initialize Firebase (Ensure this matches your config)
const firebaseConfig = {
    apiKey: "AIzaSyDG3C4wwetbVFHCNt3latkgM7-3ntOfFmg",
    authDomain: "help-me-up-70fcc.firebaseapp.com",
    databaseURL: "https://help-me-up-70fcc-default-rtdb.firebaseio.com",
    projectId: "help-me-up-70fcc",
    storageBucket: "help-me-up-70fcc.firebasestorage.app",
    messagingSenderId: "593893312398",
    appId: "1:593893312398:web:a982fca857289fc2f206df"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
const db = firebase.database();

// The Guard Function
auth.onAuthStateChanged(async (user) => {
    const currentPage = window.location.pathname.split("/").pop();

    // 1. If not logged in and not on login/register pages, send to login
    if (!user && currentPage !== "login.html" && currentPage !== "registerall.html") {
        window.location.href = "login.html";
        return;
    }

    if (user) {
        // Fetch User Data from Realtime Database
        const snapshot = await db.ref('users/' + user.uid).get();
        const userData = snapshot.val();
        const role = userData ? userData.role : 'member';
        const isAdmin = admins.includes(user.email.toLowerCase());

        // 2. ADMIN PROTECTION: Only allow admins to admin.html
        if (currentPage === "admin.html") {
            if (!isAdmin) {
                alert("Restricted: Admin Eyes Only");
                window.location.href = "index.html";
            }
        }

        // 3. CGT & POST PROTECTION: Admins and CGT only
        if (currentPage === "cgt.html" || currentPage === "post.html") {
            if (!isAdmin && role !== "cgt_user") {
                alert("Restricted: Requires CGT or Admin Clearance");
                window.location.href = "index.html";
            }
        }
    }
});

// Logout Helper
function logout() {
    auth.signOut().then(() => {
        window.location.href = "login.html";
    });
}