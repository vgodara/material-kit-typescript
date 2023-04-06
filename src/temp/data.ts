import {faker} from "@faker-js/faker";
import {sample} from "lodash";
import {HeadCell} from "../components/table/types";
import {User} from "../sections/@dashboard/user/types";
import {BlogPostSortOption} from "../sections/@dashboard/blog/types";
import {LabelType} from "../sections/@dashboard/mail/MailItem";
import {fDate} from "../utils/formatTime";
import {ProductList} from "../sections/@dashboard/product/types";

export const TABLE_HEAD: HeadCell<User>[] = [
    {id: 'name', label: 'Name', alignRight: false},
    {id: 'company', label: 'Company', alignRight: false},
    {id: 'role', label: 'Role', alignRight: false},
    {id: 'isVerified', label: 'Verified', alignRight: false},
    {id: 'status', label: 'Status', alignRight: false},
    {id: 'avatarUrl'}
];
export const users = [...Array(24)].map((_, index) => ({
    id: faker.datatype.uuid(),
    avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
    name: faker.name.fullName(),
    company: faker.company.name(),
    isVerified: faker.datatype.boolean(),
    status: sample(['active', 'banned'])!,
    role: sample([
        'Leader',
        'Hr Manager',
        'UI Designer',
        'UX Designer',
        'UI/UX Designer',
        'Project Manager',
        'Backend Developer',
        'Full Stack Designer',
        'Front End Developer',
        'Full Stack Developer',
    ])!,
}));
const PRODUCT_NAME = [
    'Nike Air Force 1 NDESTRUKT',
    'Nike Space Hippie 04',
    'Nike Air Zoom Pegasus 37 A.I.R. Chaz Bear',
    'Nike Blazer Low 77 Vintage',
    'Nike ZoomX SuperRep Surge',
    'Zoom Freak 2',
    'Nike Air Max Zephyr',
    'Jordan Delta',
    'Air Jordan XXXV PF',
    'Nike Waffle Racer Crater',
    'Kyrie 7 EP Sisterhood',
    'Nike Air Zoom BB NXT',
    'Nike Air Force 1 07 LX',
    'Nike Air Force 1 Shadow SE',
    'Nike Air Zoom Tempo NEXT%',
    'Nike DBreak-Type',
    'Nike Air Max Up',
    'Nike Air Max 270 React ENG',
    'NikeCourt Royale',
    'Nike Air Zoom Pegasus 37 Premium',
    'Nike Air Zoom SuperRep',
    'NikeCourt Royale',
    'Nike React Art3mis',
    'Nike React Infinity Run Flyknit A.I.R. Chaz Bear',
];
const PRODUCT_COLOR = ['#00AB55', '#000000', '#FFFFFF', '#FFC0CB', '#FF4842', '#1890FF', '#94D82D', '#FFC107'];

export const products = [...Array(24)].map((_, index) => {
    const setIndex = index + 1;

    return {
        id: faker.datatype.uuid(),
        cover: `/assets/images/products/product_${setIndex}.jpg`,
        name: PRODUCT_NAME[index],
        price: faker.datatype.number({min: 4, max: 99, precision: 0.01}),
        priceSale: setIndex % 3 ? undefined : faker.datatype.number({min: 19, max: 29, precision: 0.01}),
        colors:
            (setIndex === 1 && PRODUCT_COLOR.slice(0, 2)) ||
            (setIndex === 2 && PRODUCT_COLOR.slice(1, 3)) ||
            (setIndex === 3 && PRODUCT_COLOR.slice(2, 4)) ||
            (setIndex === 4 && PRODUCT_COLOR.slice(3, 6)) ||
            (setIndex === 23 && PRODUCT_COLOR.slice(4, 6)) ||
            (setIndex === 24 && PRODUCT_COLOR.slice(5, 6)) ||
            PRODUCT_COLOR,
        sizes: [...Array(5)].map((_, index) => (`${index + 5}`)),
        status: sample(['sale', 'new', '', ''])!,
        createdAt: faker.date.past(),
        stock:sample(['low stock','out of stock','in stock'])!,
    };
});
export const productDetails = [...Array(24)].map((_, index) => ({
    sellableUnit: 2,
    totalReviews: 24,
    averageRating: 4,
    aggregatedRatings: [...Array(5)].map((_, index) => ({
        label: `${index + 1} Star`,
        occurrence: faker.datatype.number({min: 1000, max: 10000}),
        value: faker.datatype.number({min: 1, max: 5, precision: 0.1}),

    }))
    , descriptions: [...Array(5)].map(() => ({
        heading: faker.lorem.word(),
        detail: faker.lorem.lines(1),
    })),
    ratingList: {
        nextPage: -1,
        ratings: [...Array(24)].map((_, index) => ({
            user: users[index],
            verifiedPurchase: true,
            verifiedPurchaseText: 'Verified Purchase',
            stars: faker.datatype.number({min: 1, max: 5}),
            review: faker.lorem.lines(2),
            reviewTime: faker.date.past(),
            helpfulText: 'Was this review helpful to you?',
            foundHelpful: faker.datatype.number()

        }))
    },
    ...products[index]
}))
const POST_TITLES = [
    'Whiteboard Templates By Industry Leaders',
    'Tesla Cybertruck-inspired camper trailer for Tesla fans who can’t just wait for the truck!',
    'Designify Agency Landing Page Design',
    '✨What is Done is Done ✨',
    'Fresh Prince',
    'Six Socks Studio',
    'vincenzo de cotiis’ crossing over showcases a research on contamination',
    'Simple, Great Looking Animations in Your Project | Video Tutorial',
    '40 Free Serif Fonts for Digital Designers',
    'Examining the Evolution of the Typical Web Design Client',
    'Katie Griffin loves making that homey art',
    'The American Dream retold through mid-century railroad graphics',
    'Illustration System Design',
    'CarZio-Delivery Driver App SignIn/SignUp',
    'How to create a client-serverless Jamstack app using Netlify, Gatsby and Fauna',
    'Tylko Organise effortlessly -3D & Motion Design',
    'RAYO ?? A expanded visual arts festival identity',
    'Anthony Burrill and Wired mag’s Andrew Diprose discuss how they made January’s Change Everything cover',
    'Inside the Mind of Samuel Day',
    'Portfolio Review: Is This Portfolio Too Creative?',
    'Akkers van Margraten',
    'Gradient Ticket icon',
    'Here’s a Dyson motorcycle concept that doesn’t ‘suck’!',
    'How to Animate a SVG with border-image',
];
export const posts = [...Array(23)].map((_, index) => ({
    id: faker.datatype.uuid(),
    cover: `/assets/images/covers/cover_${index + 1}.jpg`,
    title: POST_TITLES[index + 1],
    createdAt: faker.date.past(),
    view: faker.datatype.number(),
    comment: faker.datatype.number(),
    share: faker.datatype.number(),
    favorite: faker.datatype.number(),
    author: {
        name: faker.name.fullName(),
        avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
    },
}));

export const SORT_OPTIONS: BlogPostSortOption[] = [
    {value: 'latest', label: 'Latest'},
    {value: 'popular', label: 'Popular'},
    {value: 'oldest', label: 'Oldest'},
];

export const account = {
    displayName: 'Jaydon Frankie',
    email: 'demo@minimals.cc',
    photoURL: '/assets/images/avatars/avatar_default.jpg',
    role: 'admin',
};

export const emailNav = [
    {
        icon: 'eva:email-fill',
        name: "all mail",
        count: 3,
        path: 'allmail',
    },
    {
        icon: 'eva:inbox-fill',
        name: "inbox",
        count: 1,
        path: 'inbox',
    },
    {
        icon: 'ic:round-send',
        name: "sent",
        count: 0,
        path: 'sent',
    },
    {
        icon: 'eva:file-fill',
        name: "drafts",
        count: 0,
        path: 'drafts',
    },
    {
        icon: 'eva:trash-2-outline',
        name: "trash",
        count: 0,
        path: 'trash',
    },
    {
        icon: 'ri:spam-2-fill',
        name: "spam",
        count: 1,
        path: 'spam',
    },
    {
        icon: 'ic:round-label-important',
        name: "important",
        count: 1,
        path: 'important',
    },
    {
        icon: 'eva:star-fill',
        name: "starred",
        count: 1,
        path: 'starred',
    },
    {
        icon: 'ic:round-label',
        name: "social",
        count: 0,
        color: 'success',
        path: 'social',
    },
    {
        icon: 'ic:round-label',
        name: "promotions",
        count: 2,
        color: 'warning',
        path: 'promotions',
    },
    {
        icon: 'ic:round-label',
        name: "forums",
        count: 0,
        color: 'error',
        path: 'forums',
    }
]
export type MailType = 'inbox'
    | 'sent'
    | 'drafts'
    | 'trash'
    | 'spam'
    | 'important'
    | 'starred'
    | 'social'
    | 'promotions'
    | 'forums'
export const mails = Array.from(Array(faker.datatype.number({min: 20, max: 50})).keys()).map(() => ({
    name: faker.name.fullName(),
    avatar: Math.random() > 0.5 ? faker.image.avatar() : undefined,
    subject: faker.company.catchPhrase(),
    content: faker.company.catchPhrase(),
    selected: Math.random() > 0.5,
    starred: Math.random() > 0.5,
    important: Math.random() > 0.5,
    read: Math.random() > 0.5,
    date: faker.date.past(),
    labels: Array.from({
        length: faker.datatype.number({
            min: 0,
            max: 5
        })
    }, () => sample(['social', 'promotions', 'forums'])!) as LabelType[],
    type: Array.from({
        length: faker.datatype.number({
            min: 0,
            max: 5
        })
    }, () => sample(['inbox', 'sent', 'drafts', 'trash', 'spam', 'important', 'starred', 'social', 'promotions',
        'forums'])!) as MailType[]
}))

export const paymentOptions = [...Array(4)].map((_, index) => (
    {
        setSelectedCard: (value: number) => {
            console.log(value)
        },
        title: faker.lorem.words(3),
        description: faker.lorem.lines(3),
        type: ['credit', 'debit', 'paypal', 'cod'][index] as 'credit' | 'debit' | 'paypal' | 'cod',
        icons: [...Array(2)].map((_, index) => (index === 0 ? '/assets/icons/payments/ic_visa.svg' : '/assets/icons/payments/ic_mastercard.svg')),
        savedCards: [...Array(3)].map((_, index) => ({
                value: index,
                label: faker.lorem.words(5)
            }
        ))
    }))

export const addresses = [...Array(5)].map((_, index) => (
    {
        id: faker.datatype.uuid(),
        isDefault: index === 1,
        name: faker.name.fullName(),
        type: faker.lorem.word(),
        address: faker.address.streetAddress(true),
        pinCode: faker.address.zipCode()
    }
))

export const itemsToBuy = productDetails.slice(faker.datatype.number({
    min: 0,
    max: productDetails.length
}), faker.datatype.number({min: 0, max: productDetails.length})).map((product) => ({
    id: product.id,
    name: product.name,
    cover: product.cover,
    selectedColor: sample(product.colors)!,
    selectedSize: sample(product.sizes)!,
    selectedQuantity: faker.datatype.number({min: 1, max: product.sellableUnit}),
    availableQuantity: product.sellableUnit,
    sellingPrice: product.priceSale ?? product.price,
    totalPrice: (product.priceSale ?? product.price) * faker.datatype.number({min: 1, max: product.sellableUnit}),
}))
export const deliveryOptions = [...Array(2)].map((_, index) => ({
    type: index === 0 ? 'standard' : 'express' as ('standard' | 'express'),
    title: faker.lorem.words(1),
    description: `Delivered on ${fDate(faker.date.soon(20))}`
}))
export const order = {

    subTotal: faker.datatype.number({min: 100, max: 500}),
    discount: faker.datatype.number({min: 0, max: 10}),
    shippingCharge: faker.datatype.number({min: 1, max: 20}),
    total: faker.datatype.number({min: 100, max: 500}),

}

export const PRODUCT_TABLE_HEAD: HeadCell<ProductList>[] = [
    {id: 'name', label: 'Name', alignRight: false},
    {id: 'createdAt', label: 'Created at', alignRight: false},
    {id: 'status', label: 'Status', alignRight: false},
    {id: 'price', label: 'Price', alignRight: false},
    {id: 'id'}
];