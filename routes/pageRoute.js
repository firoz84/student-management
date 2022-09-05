

const express= require('express');

const {showHomePage,showGallerypage,showArchivePage,showLocationPage,showMenuPage,showNewsPage,showStaffPage,showsinglePage}= require('../controllers/pageController');


const router= express.Router();

router.get('/',showHomePage);
router.get('/gallery',showGallerypage);
router.get('/archive',showArchivePage);
router.get('/archive/:id',showsinglePage);
router.get('/location',showLocationPage);
router.get('/menu',showMenuPage);
router.get('/news',showNewsPage);
router.get('/staff',showStaffPage);





module.exports=router;