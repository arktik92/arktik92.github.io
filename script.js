//NAVBAR
let lastScrollTop = 0;
navbar = document.getElementById("navbar");

window.addEventListener("scroll", function() {
    const scrollTop = window.pageTOffset ||
    this.document.documentElement.scrollTop;

    if(scrollTop > lastScrollTop) {
        navbar.style.top = "-50px";
    }else{
        navbar.style.top = "0";
    }
    lastScrollTop = scrollTop;
});



//TYPED
var typed = new Typed('.typed', {
    strings: [,"Bonjour à toutes et à tous, je me présente je m'appelle Esteban","Après une carrière m'ayant fait découvrir plusieurs milieux professionnels, j'ai decidé de me lancer à fond dans l'apprentissage du code. Depuis maintenant plusieurs mois je me forme à temps plein en autodidacte à l'apprentissage de langages front tel que HTML, CSS ainsi que javaScript afin de devenir le plus rapidement possible développeur. j'ai également suivi la formation Apple Foundation Program proposé par simplon.co. Plus qu'un avenir professionnel, je me suis découvert une passion. Celle de coder."],
    typeSpeed: 40,
    backSpeed: 0,
    smartBackspace: true, // Default value
    loop: false
  });

  //COMPTEUR LIVE

  let compteur = 0;

  $(window).scroll(function(){

    const top = $(".counter").offset().top - window.innerHeight;

    if (compteur == 0 && $(window).scrollTop() > top ) {
        $(".counter-value").each(function() {
            let $this = $(this),
            countTo = $this.attr("data-count");
            $({
                countNum: $this.text()
            }).animate({
                countNum : countTo

            },
            {
                duration: 10000,
                easing: "swing",
                step: function() {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function() { 
                    $this.text(this.countNum);
                }
            });
        });
        compteur = 1;
    }

  });

  //AOS
  AOS.init();