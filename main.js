function start(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    })
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/e_1R8CevE/model.json',modelReady)
}

function modelReady(){
    classifier.classify(gotResults)
}

function gotResults(error,results){
    if(error){
        console.error(error)
    }
    else{
        console.log(results)

        random_number_r = Math.floor(Math.random() * 255)
        random_number_g = Math.floor(Math.random() * 255)
        random_number_b = Math.floor(Math.random() * 255)

        document.getElementById("I_can_hear").innerHTML= "I can hear " + results[0].label
        document.getElementById("Accuracy").innerHTML= "Accuracy " + (results[0].confidence*100).toFixed(2) + " %"
        document.getElementById("I_can_hear").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")"
        document.getElementById("Accuracy").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")"

        img1=document.getElementById("aliens1")
        img2=document.getElementById("aliens2")
        img3=document.getElementById("aliens3")
        img4=document.getElementById("aliens4")

        if(results[0].label=="Barking"){
            img1.src="dog.gif"
            img2.src="cat.jpg"
            img3.src="cow.png"
            img4.src="tiger.png"
        }

        else if(results[0].label=="Meowing"){
            img1.src="Dog.png"
            img2.src="cat.gif"
            img3.src="cow.png"
            img4.src="tiger.png"
        }

        else if(results[0].label=="Mooing"){
            img1.src="Dog.png"
            img2.src="cat.jpg"
            img3.src="cow.gif"
            img4.src="tiger.png"
        }

        else{
            img1.src="Dog.png"
            img2.src="cat.jpg"
            img3.src="cow.png"
            img4.src="tiger.gif"
        }
    }
}





