import { Bolt } from "lucide-react";
import { ShoppingBag } from "lucide-react";
import { BellDot } from "lucide-react";
import { BookOpenText } from "lucide-react";
import { BriefcaseBusiness } from "lucide-react";
import { CircleHelp } from "lucide-react";
import { TriangleAlert } from "lucide-react";
import { MessageCircle } from "lucide-react";
import { Images } from "lucide-react";
import { Play } from "lucide-react";
import { MapPin } from "lucide-react";
import { Database } from "lucide-react";
import { PanelsTopLeft } from "lucide-react";
import { MessageSquareText } from 'lucide-react';
import { SquarePlus } from 'lucide-react';
import { PanelTop } from "lucide-react";




import { Bolt } from "lucide-react";
import { ShoppingBag } from "lucide-react";
import { BellDot } from "lucide-react";
import { BookOpenText } from "lucide-react";
import { BriefcaseBusiness } from "lucide-react";
import { CircleHelp } from "lucide-react";
import { TriangleAlert } from "lucide-react";
import { MessageCircle } from "lucide-react";
import { Images } from "lucide-react";
import { Play } from "lucide-react";
import { MapPin } from "lucide-react";
import { Database } from "lucide-react";
import { PanelsTopLeft } from "lucide-react";
import { MessageSquareText } from 'lucide-react';
import { SquarePlus } from 'lucide-react';
import { PanelTop } from "lucide-react";

export const Menus = [
  {
    name: "Home",
    subMenuHeading: ["Design", "Scale"],
    subMenu: [
      {
        name: "Our Work",
        desc: "Responsive design",
        icon: PanelsTopLeft,
      },
      {
        name: "Management",
        desc: "Site control",
        icon: Bolt,
      },
    ],
    gridCols:1 ,
  },
  {
    name: "Services",
    subMenuHeading: ["Get started"],
    subMenu: [
      // {
      //   name: "Markplace",
      //   desc: "Browse templates",
      //   icon: ShoppingBag,
      // },
      {
        name: "Updates",
        desc: "Changelog",
        icon: BellDot,
      },
      {
        name: "Academy",
        desc: "Watch lessions",
        icon: Play,
      },
      // {
      //   name: "Figma",
      //   desc: "Plugin",
      //   icon: Figma,
      // },
      {
        name: "Our Experts",
        desc: "Jobs",
        icon: BriefcaseBusiness,
      },
    ],
    gridCols: 1,
  },
  {
    name: "Support",
    subMenu: [
      {
        name: "Help",
        desc: "Center",
        icon: CircleHelp,
      },
      {
        name: "Contact Us",
        desc: "Contact",
        icon: MessageCircle,
      },
      {
        name: "Feedback",
        desc: "Send us",
        icon: MessageSquareText
      },
      {
        name: "Join Our Team",
        desc: "Apply",
        icon: SquarePlus
      },
    ],
    gridCols: 1,
  },
  {
    name: "Pricing",
  },
  {
    name: "Blog",
  },
];
