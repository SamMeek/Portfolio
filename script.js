document.addEventListener("DOMContentLoaded", function () {
    const skills = [
        { class: ".progressHTML", level: 90 },
        { class: ".progressCSS", level: 95 },
        { class: ".progressAJS", level: 85 },
        { class: ".progressJS", level: 90 },
        { class: ".progressBCSS", level: 97 },
        { class: ".progressTCSS", level: 99 },
        { class: ".progressAnJS", level: 90 },
        // Add more skills here
    ];

    skills.forEach(skill => {
        const progressBar = document.querySelector(skill.class);
        let animationTriggered = false;

        window.addEventListener("scroll", function () {
            if (!animationTriggered) {
                const progressBarPosition = progressBar.getBoundingClientRect().top;
                const screenHeight = window.innerHeight;

                if (progressBarPosition < screenHeight) {
                    progressBar.style.width = skill.level + "%";
                    progressBar.classList.add("animate-progress");
                    animationTriggered = true;
                }
            }
        });
    });
});