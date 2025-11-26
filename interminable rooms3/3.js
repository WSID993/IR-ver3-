function spawnA15() {
    if (A15) return;

    A15 = document.createElement("div");
    A15.classList.add("a15");

    A15.style.left = Math.random() * 550 + "px";
    A15.style.top = Math.random() * 550 + "px";

    game.appendChild(A15);

    // A-15 스폰 사운드
    document.getElementById("a15_spawn").play();

    setTimeout(() => {
        const staticSound = document.getElementById("a15_static");
        staticSound.loop = true;
        staticSound.play();
        A15_startMovement();
    }, 1000);
}


function A15_startMovement() {
    A15Interval = setInterval(() => {
        if (!A15 || player.isDead) return;

        const px = parseFloat(player.style.left);
        const py = parseFloat(player.style.top);
        let ax = parseFloat(A15.style.left);
        let ay = parseFloat(A15.style.top);

        let dx = px - ax;
        let dy = py - ay;

        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 25) {
            killPlayerByA15();
            return;
        }

        A15.style.left = ax + (dx / dist) * 2.5 + "px";
        A15.style.top = ay + (dy / dist) * 2.5 + "px";

    }, 20);
}


function killPlayerByA15() {
    if (!A15) return;

    clearInterval(A15Interval);

    A15.remove();
    A15 = null;

    const staticSound = document.getElementById("A-15_Static.mp3.mpeg");
    staticSound.pause();
    staticSound.currentTime = 0;

    // 점프스케어
    document.getElementById("A-15_Jumpscare.mp3.mpeg").play();

    player.isDead = true;
}


function spawnA60() {
    if (A60) return;

    A60 = document.createElement("div");
    A60.classList.add("a60");

    A60.style.left = Math.random() * 550 + "px";
    A60.style.top = Math.random() * 550 + "px";

    game.appendChild(A60);

    // A-35 스폰 사운드
    document.getElementById("a60_spawn").play();

    setTimeout(() => {
        const staticSound = document.getElementById("a60_static");
        staticSound.loop = true;
        staticSound.play();
        A15_startMovement();
    }, 1000);
}


function A60_startMovement() {
    A35Interval = setInterval(() => {
        if (!A60 || player.isDead) return;

        const px = parseFloat(player.style.left);
        const py = parseFloat(player.style.top);
        let ax = parseFloat(A60.style.left);
        let ay = parseFloat(A60.style.top);

        let dx = px - ax;
        let dy = py - ay;

        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 25) {
            killPlayerByA60();
            return;
        }

        A60.style.left = ax + (dx / dist) * 2.5 + "px";
        A60 .style.top = ay + (dy / dist) * 2.5 + "px";

    }, 20);
}


function killPlayerByA60() {
    if (!A60) return;

    clearInterval(A60Interval);

    A60.remove();
    A60 = null;

    const staticSound = document.getElementById("A-60_Static.mp3.mpeg");
    staticSound.pause();
    staticSound.currentTime = 0;

    player.isDead = true;
}

function spawnA60() {
    if (A60) return;

    A60 = document.createElement("div");
    A60.classList.add("a60");

    A60.style.left = Math.random() * 550 + "px";
    A60.style.top = Math.random() * 550 + "px";

    game.appendChild(A60);

    // A-60 스폰 사운드
    document.getElementById("a35_spawn").play();

    setTimeout(() => {
        const staticSound = document.getElementById("a60_static");
        staticSound.loop = true;
        staticSound.play();
        A15_startMovement();
    }, 1000);
}


function A35_startMovement() {
    A35Interval = setInterval(() => {
        if (!A35 || player.isDead) return;

        const px = parseFloat(player.style.left);
        const py = parseFloat(player.style.top);
        let ax = parseFloat(A35.style.left);
        let ay = parseFloat(A35.style.top);

        let dx = px - ax;
        let dy = py - ay;

        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 25) {
            killPlayerByA35();
            return;
        }

        A35.style.left = ax + (dx / dist) * 2.5 + "px";
        A35.style.top = ay + (dy / dist) * 2.5 + "px";

    }, 20);
}


function killPlayerByA35() {
    if (!A35) return;

    clearInterval(A35Interval);

    A35.remove();
    A35 = null;

    const staticSound = document.getElementById("A-35_Static.mp3.mpeg");
    staticSound.pause();
    staticSound.currentTime = 0;

    player.isDead = true;
}