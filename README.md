# next-js-app

react now categorizes components as:
- client side components and 
- server side components.

with next-js, optimisation
- image - optimisation
- script - optimisation

cool-features of the next js
- server-side pre-rendering

CLIENT-SIDE COMPONNENTS
- require interactivity
- not depended on the server

##WHAT IS SERVER-SIDE PRE-RENDERING?##

*leave as serverside component until there is need for browser interactivity.

FILE BASED ROUTING

CONCEPTS
- ROUTING
- DYNAMIC ROUTING
- LAYOUTS
- ROUTE GROUPS
    ORGANISE STRUCTURE WITHOUT AFFECTING TYPE wrap inside parenthesis (). create folders with
- ERROR-HANDLING
- LOADING HANDLING

main file conventions
- parallel routes
- intereptive routes
- localisation routes

DATA FETCHING????
there are different ways
1. using useEffect()
2. this happening in SERVER SIDE.

server componentsHmrCache
    cache fetch responses across HMR

server side fetching vs clientside fetching.
advantage of server side fetch
- improved initial load time: it reduces the time for FCP first contentful pae.
- better SEO:
- shorter code and simplified logic
- automatic request deduplication: reduce unncessary data calls
- improved security. better protech sensitive information
- reduced network waterfall. 

I CAN ALSO SERVER RENDER ANY OTHER CALLS:
1. a direct database call to prisma
2. or mongodb
3. make direct database calls!

## different server side strategies that allow me to manage how and when i render my content on server side. -> VERY IMPORTANT
1. Static Site Generation - SSG
    à technique where html pages are generated at build time.
    CONTENT IS CREATED WHEN I DEPLOY MY SITE NOT WHEN THE WEBSITE REQUESTS IT.
    it is extremely fast, and can be served from a CDN
    BUT IT IS NOT SUITABLE FOR WEBSITES THAT NEED FREQUENTLY UPDATED CONTENT.
    nextjs by default using static generation
    blogs, documentation sites, marketing

2. Incremental Static Regeneration (ISR):
    an extension of SSG
    UPDATE STATIC CONTENT AFTER I BUILD MY SITE
    it creates static pages at build time just like ssg, and then updates them after some time has passed.
    *combines the benefits of static generation with the ability to refresh or update*
    two ways:
    1. time based revalidation: export revalidate to revalidate after some time.
        route-segment-config -> revalidates the entire page (export const revalidate)
    2. revalidate the request after sometime.
        revalidation specifically for the data fetch
    3. on-demand revalidation. this revalidates path and tag
    *ISR is perfect for websites whose content changes occassionally, but still does not need real-time updates*
3. Server Side Rendering
    it generates the hmtl for a page on the server in response to a user's request. 
    this means that the content is created dynamically for each user request, and not only for each deployment
    it is slower that SSG and it puts more load on the server, but there will always be up to date content
    *ideal for highly dynamic content or pages for real-time data*
    time-based revalidation: export const revalidate = 0
    just set time to zero
4. PPR Partial Pre-Rendering -> combines static and dynamic rendering.
    allows rendering a static shell of a page while streaming dynamic content
    allows for hybrid approach within a page.
    how.
    - at build time nextjs builds static shells
    - dynamic components are wrapped in a suspense tag.
    implications:
    - static components
    - dynamic components
    - and mixed as well.

## API ROUTES
routes.ts
you can write server code easily.

## SEO OPTIMISATION
using meta data. -> ensure content is sharable

there are 2 ways to manage meta data in nextjs.
1. config based . export const metadata = {

    }
    but this would only create static meta data.

2. creating dynamic meta data based on users interest.
    export async function generateMetadata({params}) {
        const { id } = params;
        const resource = await getResourceById({ id });
        const title = 
    }
    *OR FILE BASED METADATA-> THIS HAS A HIGHER PRIORITY!
    place site items in the app folder, and nextjs creates responding metadata for them.
    add them with the proper names.
