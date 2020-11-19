class User{

    constructor(firstName, lastName, email, password, phoneNumber, age, gender, zipCode, username){

        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.phoneNumber = phoneNumber;
        this.age = age;
        this.gender = gender;
        this.zipCode = zipCode;
        this.username = username;
    
    }

    firstName(newFirstName){
        this.firstName = newFirstName;
    }

    lastName(newLastName){
        this.lastName = newLastName;
    }

    email(newEmail){
        this.email = newEmail;
    }
    
    password(newPassword){
        this.password = newPassword;
    }

    phoneNumber(newPhoneNumber){
        this.phoneNumber = newPhoneNumber;
    }

    age(newAge){
        this.age = newAge;
    }

    gender(newGender){
        this.gender = newGender;
    }

    zipCode(newZipCode){
        this.zipCode = newZipCode;
    }

    username(newUsername){
        this.username = newUsername;
    }

}

module.exports = User