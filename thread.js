class Thread{

    constructor(content, title, likes, dislikes, user, comments, flagged, category, date){

        this.content = content;
        this.title = title;
        this.likes = likes;
        this.dislikes = dislikes;
        this.user = user;
        this.comments = comments;
        this.flagged = flagged;
        this.category = category;
        this.date = date;
    
    }

    content(newContent){
        this.content = newContent;
    }

    title(newTitle){
        this.title = newTitle;
    }

    likes(newLikes){
        this.likes = newLikes;
    }
    
    dislikes(newDislikes){
        this.dislikes = newDislikes;
    }

    user(newUser){
        this.user = newUser;
    }

    comments(newComments){
        this.comments = newComments;
    }

    flagged(newFlagged){
        this.flagged = newflagged;
    }

    category(newCategory){
        this.category = newCategory;
    }

    date(newDate){
        this.date = newDate;
    }

}

module.exports = thread