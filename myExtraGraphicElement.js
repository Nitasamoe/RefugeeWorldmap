      function ExtraGraphicElement(id, data, cx, cy, norm_gdp, norm_blau, norm_rot, norm_pop){     


        var i = id;

        Draw(id);
       

        function Draw(id){
              this.id = id;
              createGroup();
              createBögen();
              createText(id);
              animateBlue(id);
              createpath(id);
        }  

   
        function createGroup(){
          svg = d3.select("svg") //svg-element <svg></svg> auswählen
            .append("g") //svg gruppe <g></g> hinzufügen
            //.attr('transform', "translate("+data.kx*20+","+data.ky*20+")")
            //.attr("transform", "scale(0.1,0.1)")
            //.attr('transform', "translate("+cx+","+cy+") scale(.1)")
            //.attr("transform", "scale(0.1)")
            .attr("id", "extra"+id) //eindeutige bezeichnung der gruppe hinzufügen
            .attr("transform", "translate("+ cx +","+ cy +")")
            .attr("visibility", "hidden");
        } 


        function createBögen(){ 
            var ArcRot=d3.svg.arc()
              .innerRadius(0)
              .outerRadius(norm_rot( parseFloat( data.Fluchtlinge ) ))
              .startAngle(-Math.PI / 2)
              .endAngle(Math.PI / 2)

            var ArcBlau=d3.svg.arc()
              .innerRadius(0)
              .outerRadius(norm_blau( parseFloat( data.Ankommende ) ))
              .startAngle(-Math.PI / 2)
              .endAngle(Math.PI / 2)

              //console.log(ArcBlau())

            var ArcNull=d3.svg.arc()
              .innerRadius(0)
              .outerRadius(1)
              .startAngle(-Math.PI / 2)
              .endAngle(Math.PI / 2)


            var ArcBIP=d3.svg.arc()
              .innerRadius(data.Fluchtlinge/100+35)
              .outerRadius(data.Fluchtlinge/100+45)
              .startAngle(-Math.PI / 2)
              .endAngle(Math.PI / (4E+12) * data.GDP)   // BIP 1014273.62553-4158182914 = 2Pi


            var ArcEinwohner=d3.svg.arc()
              .innerRadius(data.Fluchtlinge/100+5)
              .outerRadius(data.Fluchtlinge/100+30)
              .startAngle(-Math.PI / 2)
              .endAngle(Math.PI / (182142594-423374) * data.Population)   // Einwohner 182142594-423374 = 2Pi



            svg
              .append('g')
              .attr("id", "HalbkreisRot"+id)
                .append('path')
                .attr('d', ArcRot)
                .attr("id","ArcRot"+id)
                .attr('transform', "translate(200, 145) rotate(-30)")
                .attr("fill", "rgba(255,64,66,1)")

              svg
              .append('g')
              .attr("id", "HalbkreisBlau"+id)
                .append('path')
                .attr('d', ArcBlau)
                .attr("id","ArcBlau"+id)
                .attr('transform', "translate(180, 280) rotate(-210)")
                .attr("fill", "rgba(64,95,255,1)")

              svg
              .append('g')
              .attr("id", "HalbkreisNull"+id)
                .append('path')
                .attr('d', ArcBlau)
                .attr("id","ArcNullA"+id)
                .attr('transform', "translate(180, 280) rotate(-210)")
                .attr("fill", "rgba(64,95,255,1)")

              svg
              .append('g')
              .attr("id", "HalbkreisNull"+id)
                .append('path')
                .attr('d', ArcBlau)
                .attr("id","ArcNullB"+id)
                .attr('transform', "translate(180, 280) rotate(-210)")
                .attr("fill", "rgba(64,95,255,1)")

              svg
              .append('g')
              .attr("id", "HalbkreisNull"+id)
                .append('path')
                .attr('d', ArcBlau)
                .attr("id","ArcNullC"+id)
                .attr('transform', "translate(180, 280) rotate(-210)")
                .attr("fill", "rgba(64,95,255,1)")              
                  }


        function createpath(id){

          this.id =id;      data.GDP

          svg.append("g")
            .attr("id", "Balken")
            .append("line")
            .attr("id", "BIP"+id)
            .attr("x1","0")
            .attr("y1","0")
            .attr("x2","0")
            //.attr("y2",data.GDP/500000000) norm_gdp
            //.attr("y2",data.GDP/50000000000000)
            .attr("y2", norm_gdp( parseFloat( data.GDP ) ) )
            .attr("stroke","rgba(0,0,0,0.9)")
            .attr("stroke-width", "20")
            .attr('transform', "translate(109, 240) rotate(240)");    
            

          svg.append("g")
            .attr("id", "Balken")
            .append("line")
            .attr("id", "Bevö"+id)
            .attr("x1","0")
            .attr("y1","0")
            .attr("x2","0")
            .attr("y2", norm_pop( parseFloat( data.Population ) ) )
            //.attr("y2",data.Population/300000)
            .attr("stroke","rgba(0,0,0,0.9)")
            .attr("stroke-width", "20")
            .attr('transform', "translate(97, 220) rotate(240)");   
            }


        function createText(id){
            this.id = id;
            svg.append("g")
            .attr("id", "svgtext"+id)
            .append("text")
            .attr("id", "Land"+id)
            .attr("font-family", "Arial")
            .attr("font-weight", 300)
            .attr("font-size", "30pt")
            .attr("text-anchor", "start")
            .attr("dy", "0.38em")
            .attr('transform', "translate(119, 263) rotate(-30)")
            .attr("fill", "black")
            .text(data.CountryName);

            svg.append("g")
            .attr("id", "svgtext"+id)
            .append("text")
            .attr("id", "Beschreibung"+id)
            .attr("font-family", "Arial")
            .attr("font-weight", 300)
            .attr("font-size", "10pt")
            .attr("text-anchor", "end")
            .attr("dy", "0.38em")
            .attr('transform', "translate(95, 220) rotate(-30)")
            .attr("fill", "rgba(0,0,0,0.7)")
            .text("Pop");

            svg.append("g")
            .attr("id", "svgtext"+id)
            .append("text")
            .attr("id", "Beschreibung"+id)
            .attr("font-family", "Arial")
            .attr("font-weight", 300)
            .attr("font-size", "10pt")
            .attr("text-anchor", "end")
            .attr("dy", "0.38em")
            .attr('transform', "translate(107, 242) rotate(-30)")
            .attr("fill", "rgba(0,0,0,0.7)")
            .text("BIP");



  //---------------------------Text Weggelassem----------------------

            svg.append("g")
            .attr("id", "svgtext"+id)
            .append("text")
            .attr("id", "TextLandA"+id)
            .attr("font-family", "Arial")
            .attr("font-weight", 300)
            .attr("font-size", "8pt")
            .attr("text-anchor", "start")
            .attr("dy", "0.38em")
            .attr('transform', "translate(127, 300) rotate(-30)")
            .attr("fill", "black")
            .text(kaufm(data.Fluchtlinge)+" are fleeing the country, while "+ kaufm(data.Ankommende)+" are imigrating.");

            svg.append("g")
            .attr("id", "svgtext"+id)
            .append("text")
            .attr("id", "TextLandB"+id)
            .attr("font-family", "Arial")
            .attr("font-weight", 300)
            .attr("font-size", "8pt")
            .attr("text-anchor", "start")
            .attr("dy", "0.38em")
            .attr('transform', "translate(120, 290) rotate(-30)")
            .attr("fill", "black")
            .text("is a land of "+kaufm(data.Population/1000000)+" million people with "+kaufm(data.GDP/1000000000)+" billion euro.");
/*
            svg.append("g")
            .attr("id", "svgtext"+id)
            .append("text")
            .attr("id", "NotAll"+id)
            .attr("font-family", "Arial")
            .attr("font-weight", 300)
            .attr("font-size", "12pt")
            .attr("text-anchor", "start")
            .attr("dy", "0.38em")
            .attr('transform', "translate(378, 159) rotate(60)")
            .attr("fill", "rgba(0,0,0,0)")
            .text(kaufm(data.rejected)+" are not allowed to stay. ");

            svg.append("g")
            .attr("id", "svgtext"+id)
            .append("text")
            .attr("id", "NotAllA"+id)
            .attr("font-family", "Arial")
            .attr("font-weight", 300)
            .attr("font-size", "12pt")
            .attr("text-anchor", "start")
            .attr("dy", "0.38em")
            .attr('transform', "translate(363, 144) rotate(60)")
            .attr("fill", "rgba(0,0,0,0)")
            .text(kaufm(data.Population/data.Ankommende)+" people care for one refugee.");
*/

        function kaufm(x) {
                   var k = (Math.round(x * 100) / 100).toString();
                   k += (k.indexOf('.') == -1)? '.00' : '00';
                   var p = k.indexOf('.');
                    return k.substring(0, p);
                }
                  }

        function animateBlue(id){

          this.id=id;
          
            var selection = d3.select("#svgtext"+id);

                

            selection.on("mouseenter", function(){
              // window.alert("high");

              //DrawBig()

            extraGraphicElement(999, data, 500, 500, norm_gdp, norm_blau, norm_rot, norm_pop);



            var ArcBlau1=d3.svg.arc()
              .innerRadius(200-(175*(data.rejected/data.Ankommende)))
              .outerRadius(200)
              .startAngle(-Math.PI / 2)
              .endAngle(Math.PI / 2)

            var ArcNullA=d3.svg.arc()
              .innerRadius(30)
              .outerRadius(200-(175*(data.rejected/data.Ankommende)))
              .startAngle(-Math.PI / 2)
              .endAngle(Math.PI / 2)

            var ArcNullB=d3.svg.arc()
              .innerRadius(24-(25/((data.Population/data.Fluchtlinge)+1)))
              .outerRadius(25)
              .startAngle(-Math.PI / 2)
              .endAngle(Math.PI / 2)

            var ArcNullC=d3.svg.arc()
              .innerRadius(0)
              .outerRadius(24-((25/((data.Population/data.Fluchtlinge)+1))))
              .startAngle(-Math.PI / 2)
              .endAngle(Math.PI / 2)
      
              d3.select("#ArcBlau"+id)
                .transition()

                  .duration(800)
                  .attr("d", ArcBlau1() )
                  .attr("fill", "rgba(255,64,66,1)");

              d3.select("#ArcNullA"+id)
                .transition()

                  .duration(500)
                  .attr("d", ArcNullA() )
                  .attr("fill", "rgba(64,95,255,1)");

              d3.select("#ArcNullB"+id)
                .transition()

                  .duration(800)
                  .attr("d", ArcNullB() )
                  .attr("fill", "rgba(255,64,66,1)")

              d3.select("#ArcNullC"+id)
                .transition()

                  .duration(500)
                  .attr("d", ArcNullC() )
                  .attr("fill", "rgba(64,95,255,1)");

              d3.select("#NotAll"+id)
                .transition()

                  .duration(500)
                  .attr("fill", "rgba(0,0,0,1)");

              d3.select("#NotAllA"+id)
                .transition()

                  .duration(500)
                  .attr("fill", "rgba(0,0,0,1)");
          
  


                
                              }
                    )
            selection.on("mouseleave", function(){

              var ArcBlau=d3.svg.arc()
              .innerRadius(0)
              .outerRadius(norm_blau( parseFloat( data.Ankommende ) ))
              .startAngle(-Math.PI / 2)
              .endAngle(Math.PI / 2)

              console.log(ArcBlau())

              var ArcNull=d3.svg.arc()
              .innerRadius(0)
              .outerRadius(1)
              .startAngle(-Math.PI / 2)
              .endAngle(Math.PI / 2)


              d3.select("#ArcBlau"+id)
                .transition()

                  .duration(500)
                  .attr("d", ArcBlau() )
                  .attr("fill", "rgba(64,95,255,1)");

              d3.select("#ArcNullA"+id)
                .transition()

                  .duration(500)
                  .attr("d", ArcNull() )
                  .attr("fill", "rgba(64,95,255,0)");

              d3.select("#ArcNullB"+id)
                .transition()

                  .duration(500)
                  .attr("d", ArcNull() )
                  .attr("fill", "rgba(255,64,66,0)")

              d3.select("#ArcNullC"+id)
                .transition()

                  .duration(500)
                  .attr("d", ArcNull() )
                  .attr("fill", "rgba(64,95,255,0)");

              d3.select("#NotAll"+id)
                .transition()

                  .duration(500)
                  .attr("fill", "rgba(0,0,0,0)");

              d3.select("#NotAllA"+id)
                .transition()

                  .duration(500)
                  .attr("fill", "rgba(0,0,0,0)");

            } 





              ) 
                      
        }

       // TranslateAlles();

        function TranslateAlles(){
          d3.select("#Alles") //svg-element <svg></svg> auswählen
            .attr('transform', "translate(-1620,-540) scale(3)")
        } 


      }



