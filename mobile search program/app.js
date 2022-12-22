let objOfmobileData = {
    samsung:{
        s22 :{
            Model: "Samsung Galaxy S22 ",
            Price: 255850,
            Camera: "40MP",
            Storage: "256GB"
        },
        flip3 :{
            Model: "Samsung Galaxy Z Flip3 5G ",
            Price: 160000,
            Camera: "12MP",
            Storage: "256GB"
        },
        a53 :{
            Model: "Samsung Galaxy A53  ",
            Price: 64999,
            Camera: "64MP",
            Storage: "128GB"
        },
        note20 :{
            Model: "Samsung Galaxy Note20 Ultra 5G ",
            Price: 243278,
            Camera: "108MP",
            Storage: "512GB"
        },
       s21 :{
            Model: "Samsung Galaxy S21 Ultra 5G",
            Price: 216278,
            Camera: "108MP",
            Storage: "512GB"
        }
    },
   infinix:{
    infinixhot12:{
        Model: "Infinix Hot 12",
        Price: 33084,
        Camera: "13MP",
        Storage: "256GB"
    }, 
    infinixhot11:{
        Model: "Infinix Hot 11",
        Price: 20950,
        Camera: "13MP",
        Storage: "128GB"
    },
    infinixhot10:{
        Model: "Infinix Hot 10 Play",
        Price: 16000,
        Camera: "13MP",
        Storage: "64GB"
    },
    infinixhot9:{
        Model: "Infinix Hot 9 Play",
        Price: 22056,
        Camera: "13MP",
        Storage: "128GB"
    },
    infinixhot8:{
        Model: "Infinix Hot 8",
        Price: 18000,
        Camera: "14MP",
        Storage: "64GB"
    },
   },
   xiaomi:{
    redminote11:{
        Model: "Redmi Note 11",
        Price: 25600,
        Camera: "54MP",
        Storage: "128GB"
   },
   redminote10:{
        Model: "Redmi Note 10",
        Price: 20800,
        Camera: "48MP",
        Storage: "128GB"
   },
   redminote9:{
        Model: "Redmi Note 9",
        Price: 18999,
        Camera: "48MP",
        Storage: "128GB"
   },
   redminote8:{
        Model: "Redmi Note 8",
        Price: 26467,
        Camera: "32MP",
        Storage: "128GB"
   },
   redminote7:{
        Model: "Redmi Note 8",
        Price: 17320,
        Camera: "48MP",
        Storage: "128GB"
  }
},
    iphone:{
        iphone11:{
            Model: "Iphone 11",
            Price: 459700,
            Camera: "32MP",
            Storage: "128GB"
        },
        iphone12:{
            Model: "Iphone 12",
            Price: 255000,
            Camera: "32MP",
            Storage: "128GB"
        },
        iphone13:{
            Model: "Iphone 13",
            Price:  168000,
            Camera: "54MP",
            Storage: "128GB"
        },
        iphone14:{
            Model: "Iphone 14",
            Price:  80500,
            Camera: "54MP",
            Storage: "128GB"
        },
        iphone8:{
            Model: "Iphone 8",
            Price:  40800,
            Camera: "54MP",
            Storage: "128GB"
        }
    }
}



//? now here we goes with the code 
//* first we make function 
function MobileDataFinder(){

    
    //!take value of user input 
    var mobileBrand = document.getElementById("Mobilebrand").value.toLowerCase()
    var mobileModel = document.getElementById("Mobilemodel").value.toLowerCase()
    

 
//? if condition for verifing that the data is here or not

    if (objOfmobileData[mobileBrand] !== undefined) {

        if (objOfmobileData[mobileBrand][mobileModel] !== undefined) {
        

            var num2 = objOfmobileData[mobileBrand][mobileModel].Model
            var num3 = objOfmobileData[mobileBrand][mobileModel].Price
            var num4 = objOfmobileData[mobileBrand][mobileModel].Color
            var num5 = objOfmobileData[mobileBrand][mobileModel].Camera
            var num6 = objOfmobileData[mobileBrand][mobileModel].Storage
           
             
            //TODO to print in the web page using html tags 
            // var property1 = document.getElementById("charactersList1").innerHTML = "Image: "+ num1
            var property2 = document.getElementById("charactersList1").innerHTML = "Model: "+ num2
            var property3 = document.getElementById("charactersList2").innerHTML = "Price: "+  num3
            var property5 = document.getElementById("charactersList4").innerHTML = "Camera: "+  num5
            var property6 = document.getElementById("charactersList5").innerHTML = "Storage: "+  num6
            
            var imageShow = document.getElementById("img")
  imageShow.innerHTML= num1
        } else {
    
            alert("Data not found");
    
        }
    
      } else {
    
        alert("Data not found");
}

}