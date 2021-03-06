import axios from "axios";

const BaseURL = "https://ncnewsalex.herokuapp.com/api/";

export const fetchApi = async () => {
    const apiObj = await axios.get(BaseURL);
    return apiObj;
};

export const fetchArticles = async props => {
    const articles = await axios.get(BaseURL + "articles", {
        params: {
            topic: props.topic,
            author: props.author,
            sort_by: props.sort_by,
            order: props.order
        }
    });
    return articles;
};

export const fetchTopics = async () => {
    const topics = await axios.get(BaseURL + "topics");
    return topics;
};

export const fetchAuthors = async () => {
    const articles = await axios.get(BaseURL + "users");
    return articles;
};

export const fetchAuthorByName = async username => {
    const articles = await axios.get(BaseURL + "users/" + username);
    return articles;
};

export const fetchArticleById = async id => {
    const articles = await axios.get(BaseURL + "articles/" + id);
    return articles;
};

export const fetchCommentsByArticle = async id => {
    const comments = await axios.get(BaseURL + "articles/" + id + "/comments");
    return comments;
};

export const incVotesByArticle = async (id, upDown) => {
    if (upDown === "up") {
        let voted = await axios.patch(BaseURL + "articles/" + id, {
            votes: 1
        });
        console.log(voted);
    } else {
        let voted = await axios.patch(BaseURL + "articles/" + id, {
            votes: -1
        });
        console.log(voted);
    }
};
export const incVotesByComment = async (id, upDown) => {
    if (upDown === "up") {
        let voted = await axios.patch(BaseURL + "articles/" + id, {
            votes: 1
        });
        console.log(voted);
    } else {
        let voted = await axios.patch(BaseURL + "articles/" + id, {
            votes: -1
        });
        console.log(voted);
    }
};
