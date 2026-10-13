import Buffer from './src/assets/buffer-icon.svg';
import Figma from './src/assets/figma.svg';
import Code from './src/assets/code.svg';
import Box from './src/assets/box.svg';
import Phone from './src/assets/phone.svg';
import Mail from './src/assets/mail.svg';
import Clock from './src/assets/clock.svg';
import Seo from './src/assets/seo.svg';
import Fast from './src/assets/fast.svg';

import GitHub from './src/assets/github-logo.svg';
import Forbes from './src/assets/forbes-logo.svg';
import Google from './src/assets/google-logo.svg';
import Microsoft from './src/assets/microsoft-logo.svg';
import Facebook from './src/assets/facebook-logo.svg';

import HowWeWork from './src/assets/how-we-work.png';
import TeamIllustration from './src/assets/team-illustration.png';

import Avatar1 from './src/assets/1.png';
import Avatar2 from './src/assets/2.png';
import Avatar3 from './src/assets/3.png';
import Avatar4 from './src/assets/avatar4.png';
import Avatar5 from './src/assets/avatar5.png';
import Avatar6 from './src/assets/avatar6.png';
import Avatar7 from './src/assets/avatar7.png';
import Avatar8 from './src/assets/avatar8.png';
import Avatar9 from './src/assets/avatar9.png';

import Cover1 from './src/assets/cover1.png';
import Cover2 from './src/assets/cover2.png';
import Cover3 from './src/assets/cover3.png';
import Cover4 from './src/assets/cover4.png';
import Cover5 from './src/assets/cover5.png';
import Cover6 from './src/assets/cover6.png';

import Forest from './src/assets/forest.webp';

import About1 from './src/assets/about1.jpg';
import About2 from './src/assets/about2.jpg';

import TeamAlbert from './src/assets/team-albert.png';
import TeamDevon from './src/assets/team-devon.png';
import TeamDarrell from './src/assets/team-darrell.png';
import TeamMarvin from './src/assets/team-marvin.png';
import TeamFloyd from './src/assets/team-floyd.png';
import TeamAnnette from './src/assets/team-annette.png';

import ChatIllustration from './src/assets/workflow-chat.png';
import PlanningIllustration from './src/assets/workflow-planning.png';
import ShipIllustration from './src/assets/workflow-ship.png';

import UiDesign from './src/assets/ui-design.png';
import Development from './src/assets/development.png';
import Maintenance from './src/assets/maintenance.png';

import IconCard from './src/assets/icon-card.svg';
import IconCursor from './src/assets/icon-cursor.svg';
import IconMobile from './src/assets/icon-mobile.svg';
import IconDesktop from './src/assets/icon-desktop.svg';
import IconWeb from './src/assets/icon-web.svg';
import IconBackup from './src/assets/icon-backup.svg';
import IconUpgrade from './src/assets/icon-upgrade.svg';
import IconClean from './src/assets/icon-clean.svg';
import IconFix from './src/assets/icon-fix.svg';

export const Photos = {
    Icon: {
        Buffer,
        Figma,
        Code,
        Box,
        Phone,
        Mail,
        Clock,
        Seo,
        Fast,
        IconCard,
        fix: IconFix,
    } as Record<string, string>,

    SocNet: { GitHub, Forbes, Google, Microsoft, Facebook },
    Avatar: { Avatar1, Avatar2, Avatar3 },

    Services: {
        uiDesign: UiDesign,
        development: Development,
        maintenance: Maintenance,
    } as Record<string, string>,

    ServiceIcon: {
        card: IconCard,
        cursor: IconCursor,
        mobile: IconMobile,
        desktop: IconDesktop,
        web: IconWeb,
        backup: IconBackup,
        upgrade: IconUpgrade,
        clean: IconClean,
        fix: IconFix,

        Figma,
        Clock,
        Code,
        Seo,
        IconCard,
        Fast,
    } as Record<string, string>,

    Workflow: {
        chat: ChatIllustration,
        planning: PlanningIllustration,
        ship: ShipIllustration,
    } as Record<string, string>,

    BlogCover: {
        Cover1,
        Cover2,
        Cover3,
        Cover4,
        Cover5,
        Cover6,
        Forest,
    } as Record<string, string>,

    BlogAvatar: {
        Avatar4,
        Avatar5,
        Avatar6,
        Avatar7,
        Avatar8,
        Avatar9,
    } as Record<string, string>,

    About: {
        About1,
        About2,
    },

    HowWeWork,
    TeamIllustration,

    Team: {
        Albert: TeamAlbert,
        Devon: TeamDevon,
        Darrell: TeamDarrell,
        Marvin: TeamMarvin,
        Floyd: TeamFloyd,
        Annette: TeamAnnette,
    } as Record<string, string>,
};
