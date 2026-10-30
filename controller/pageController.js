
const Home = (req,res)=>{
    res.render('home');
}

const About = (req,res)=>{
    res.render('about')
}

const Contact = (req,res)=>{
    res.render('contact')
}


const User = (req, res) => {

    // 1. Read page number (default = 1)
    let page = parseInt(req.query.page) || 1;

    // 2. Set records per page
    const limit = 5;

    // 3. Calculate offset
    const offset = (page - 1) * limit;

    // 4. Get total records
    const totalRecords = userData.length;

    // 5. Calculate total pages
    const totalPages = Math.ceil(totalRecords / limit);

    // 6. Get only required records
    const users = userData.slice(offset, offset + limit);

    // 7. Render EJS
    res.render('user', {
        users,
        currentPage: page,
        totalPages
    });
};


module.exports = {
    Home,
    About,
    Contact,
    User
}