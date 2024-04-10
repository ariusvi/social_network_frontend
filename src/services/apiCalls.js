const root = "http://localhost:4000/api/"

export const loginUser = async (user) => {

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user),
    };

    try {
        const response = await fetch(`${root}auth/login`, options)
        const data = await response.json()

        if (!data.success) {
            throw new Error(data.message)
        }

        return data;
    } catch (error) {
        throw error;
    }

};

export const registerUser = async (user) => {

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user)
    }

    try {
        const response = await fetch(`${root}auth/register`, options);

        const data = await response.json();

        if (!data.success) {
            throw new Error(data.message)
        }
        return data;
    } catch (error) {
        throw error

    }
};

export const getProfile = async (token) => {

    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Baerer ${token}`
        },
    };

    try {
        // users/profile
        const response = await fetch(`${root}users/profile`, options)
        const data = await response.json()

        if (!data.success) {
            throw new Error(data.message)
        }

        return data;
    } catch (error) {
        return error
    }

};

export const updateProfile = async (token, data) => {

    const options = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(data)
    };

    try {
        const response = await fetch(`${root}users/profile`, options);
        const data = await response.json();

        if (!data.success) {
            throw new Error(data.message);
        }

        return data;
    } catch (error) {
        throw error;
    }
} //todo

export const getPosts = async (token) => {

    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    };

    try {
        const response = await fetch(`${root}posts`, options);
        const data = await response.json();

        if (!data.success) {
            throw new Error(data.message);
        }

        return data;
    } catch (error) {
        throw error;
    }
};

export const getMyPosts = async (token) => {

    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    };

    try {
        const response = await fetch(`${root}posts/own`, options);
        const data = await response.json();

        if (!data.success) {
            throw new Error(data.message);
        }

        return data;
    } catch (error) {
        throw error;
    }
}

export const createPost = async (token, post) => {

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(post)
    };

    try {
        const response = await fetch(`${root}posts`, options);
        const data = await response.json();

        if (!data.success) {
            throw new Error(data.message);
        }

        return data;
    } catch (error) {
        throw error;
    }
}

export const deletePost = async (token, postId) => {

    const options = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    }

    try {
        const response = await fetch(`${root}posts/${postId}`, options);
        const data = await response.json();

        if (!data.success) {
            throw new Error(data.message);
        }

        return data;
    } catch (error) {
        throw error;
    }
}

export const getPost = async (token, postId) => {

    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    };
    
    try {
        const response = await fetch(`${root}posts/${postId}`, options);
        const data = await response.json();

        if (!data.success) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        console.log(data.message);

        return data;
    } catch (error) {
        console.error('There was a problem with the fetch operation: ', error);
    }
}

export const likePost = async (token, postId, userId) => {
    const options = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ userId })
    };

    try {
        const response = await fetch(`${root}posts/like/${postId}`, options);
        const data = await response.json();

        if (!data.success) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return data;
    } catch (error) {
        console.error('There was a problem with the fetch operation: ', error);
    }
}