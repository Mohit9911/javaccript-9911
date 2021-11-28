// Quetion 2 

transport=['plane','bus','train'];

choice1='Take Uber from delhi airport to mayur vihar.then walk to askhardham' ;

choice2='from delhi bus stand, take an auto rickshaw to go to seelampur metro station.from seelamput metro station take metro to akshardham station.from akshardham station walk to akshardham';

choice3='from delhi train station .walk to nearest metro station.take metro to kannaud place station. from there take rickshaw to akshardham.then Walk to akshardham';

route='';

option='';

if(option==transport[0])
{
  route=choice1;
  console.log(route);
}

else if (option==transport[1])
{
    route=choice2;
    console.log(route);
}

else if (option==transport[2]){
  route=choice3;
  console.log(route);
}

else {
    route='cannot go';
    console.log(route);
    
};

