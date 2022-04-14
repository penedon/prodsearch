/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
import { faArrowUpRightFromSquare, faCloudMoon, faCloudSun, faCog, faEnvelope, faMagnifyingGlass, faTimes, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faLinkedin, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

library.add(
    faUser,
    faEnvelope,
    faLinkedin,
    faLinkedinIn,
    faMagnifyingGlass,
    faCloudSun,
    faCloudMoon,
    faCog,
    faTimes,
    faArrowUpRightFromSquare
)

export {
    FontAwesomeIcon
}