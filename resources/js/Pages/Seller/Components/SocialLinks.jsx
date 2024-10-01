import { usePage } from '@inertiajs/react'
const SocialLinks = () => {
    const { social_links } = usePage().props
    return (
        <>
            {social_links.map((social, index) => {
                let iconClass = "";
                switch (social.site) {
                    case 'facebook':
                        iconClass = "bi bi-facebook";
                        break;
                    case 'instagram':
                        iconClass = "bi bi-instagram";
                        break;
                    case 'linkedin':
                        iconClass = "bi bi-linkedin";
                        break;
                    case 'twitter':
                        iconClass = "bi bi-twitter-x";
                        break;
                    case 'youtube':
                        iconClass = "bi bi-youtube";
                        break;
                    default:
                        return null; // Handle cases where site doesn't match any of the known ones
                }

                return (
                    <div className="col-auto me-2" role="button" key={index}>
                        <a target="_blank" rel="noopener noreferrer" href={social.link} className="btn btn-light border border-1 bg-white">
                            <i className={iconClass}></i>
                        </a>
                    </div>
                );
            })}
        </>
    );
};
export default SocialLinks;