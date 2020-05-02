import * as $ from 'jquery';
import 'jquery-mapael';
import 'jquery-mapael/js/maps/world_countries.js';
// declare var $: $;
window["$"] = $;
window["jQuery"] = $;


import 'slick-carousel';



import './css/style.css';
import './css/media.css';
import '../node_modules/slick-carousel/slick/slick-theme.css';
import '../node_modules/slick-carousel/slick/slick.css';
;


$(document).ready(function(){
    
    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        adaptiveHeight: true,
        
    });

    $(".f_input").focus(function(){
        $(this).parent().addClass('is_focused has_label');
    });
    $(".f_input").blur(function(){
        if($(this).val() == ''){
            $(this).parent().removeClass('has_label');
        }
        $(this).parent().removeClass('is_focused');
    });

    
    $(".map_container").mapael({
        map : {
            name : "world_countries",
            afterInit : function($self, paper, areas, plots, options){
                $('.map_container .map').unbind("resizeEnd");
                $(window).on('resize', function () {
                    var viewportHeight = $(window).height();
                    paper.setSize($.mapael.maps['world_countries'].width * (viewportHeight / $.mapael.maps['world_countries'].height), viewportHeight);
                }).trigger('resize');
            },
            width: 1176,
            // zoom: {
            //     enabled: true,
            //     mousewHeel: false,
            //     animDuration: 250,
            //     animEasing: 'backIn'
            // },
            defaultArea: {
                attrs: {
                    stroke: '#fff',
                    'stroke-width': 1
                },
                attrsHover: {
                    'stroke-width': 2
                }
            }
        },
        legend : {
            
        },
        /* markers */
        // plots: {
        //     width: 12,
        //     height: 12,
        //     'Germany' : {
        //         latitude: 51.5167,
        //         longitude : 9.9167,
        //         value: 223446,
        //         tooltip: {content : 'Banda Aceh<br/>population: 223446'}
        //     }
        // }
    });
    
    

});