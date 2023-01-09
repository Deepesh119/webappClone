import logo from '../assets/bannerImage.gif';
import logo2 from '../assets/topBannerImageTwo.gif';
import logo3 from '../assets/TopBannerImageThree.webp';


const dataBannerImage =[
    {
        picture:logo,
    },
    {
      picture:logo2,
    },
    {
        picture:logo3,
    }
]

export const renderLogoBanner =():any=>{
    return dataBannerImage;
}