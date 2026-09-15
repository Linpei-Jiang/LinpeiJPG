gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function () {
    const pinnedCards = gsap.utils.toArray(".card.pinned");
    const finalScrollCard = document.querySelector(".card.scroll");

    pinnedCards.forEach((card, index) => {
        const next = pinnedCards[index + 1] || finalScrollCard;

        // 1. Pin the card
        ScrollTrigger.create({
            trigger: card,
            start: "center center",
            end: () => "+=" + next.offsetHeight,
            pin: true,
            pinSpacing: false,
            scrub: 1,
        });

        // 2. Scale down as the next card approaches
        gsap.to(card, {
            scale: 0.7,
            opacity: 0.9,
            ease: "none",
            scrollTrigger: {
                trigger: next,
                start: "top bottom",
                end: "top top",
                scrub: true,
            }
        });

        // 3. hide card when it was covered
        ScrollTrigger.create({
            trigger: next,
            start: "center center",
            onEnter: () => card.style.display = "none",
        });
    });
});

