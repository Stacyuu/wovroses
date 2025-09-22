const _main = setInterval(async () => {
    const req = await fetch("https://api-core.wolvesville.com/rewards/goldenWheelSpin", {
        "headers": {
            "accept": "application/json",
            "accept-language": "en-DE",
            "authorization": `Bearer ${JSON.parse(localStorage.getItem("authtokens")).idToken}`,
            "content-type": "application/json",
            "ids": "1",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-site"
        },
        "referrer": "https://www.wolvesville.com/",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": null,
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
    });

    if (!req.ok) {
        console.error("No more roses or bug. Restart if there are still roses");
        clearInterval(main);
    } else {
        const data = await req.json();
        const {
            type,
            silver
        } = data.find(({
            winner
        }) => winner);
        console.log(`Won => ${type}, ${silver} gold`);
    }
}, 1000 / 3);
