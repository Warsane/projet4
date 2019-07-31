$(function() {

            $("li").remove();
            //FADING
            $("form").children().not("input:text , textarea, br").remove();

            i = (i + 1) %
                $(this).attr("src", images[i])
            console.log(galleryImage.attr("src"))
                (this).fadeIn();
            var images = [ //le chein des images] ;
                var galleryImage =
                    $(".gallery").find("img").first();
                setInterval(function() {

                }, 2000)

                galleryImage.fadeOut(function() {

                });

            });