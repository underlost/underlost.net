document.addEventListener('DOMContentLoaded', () => {
	const duration = 3.75;
	const delay = 1;
	const ease = Circ.easeOut;
	TweenMax.set('.st0', {visibility: 'visible'});
	var tl = new TimelineMax({repeat: 0, yoyo: false});
	tl.staggerFrom('.st0', duration, {drawSVG: '50% 50%', ease: ease}, 3.20)
});
