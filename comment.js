class Comment{

    constructor(content, likes, dislikes, user, comments, flagged, category){

        this.content = content;
        this.likes = likes;
        this.dislikes = dislikes;
        this.user = user;
        this.comments = comments;
        this.flagged = flagged;
        this.category = category;
    
    }

    content(newContent){
        this.content = newContent;
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

}

module.exports = comment