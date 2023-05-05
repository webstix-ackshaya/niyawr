import Image from 'next/image'
import {GraphQLClient, gql} from 'graphql-request';
const graphcms= new GraphQLClient("https://api-ap-south-1.hygraph.com/v2/clg3fv2q0158501uhdz8m818r/master");

const QUERY=gql `
{
  posts
  {
    id,
    title,
    excerpt,
    content{html}
    
  }
}

`;

export async function getStaticProps()
{
  const { posts } = await graphcms.request(QUERY);
  return{
    props:
  {
  posts,
  },
  revalidate:10,
  };
}

export default function Home({posts}) {
  return (
<div className='bg-gray-50 mt-[50px] '>
<div className='container mx-auto '>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">

{posts.map((post)=>(

<div class="cursor-pointer rounded-xl bg-white p-5 shadow-lg hover:shadow-xl">
<a href="#" class="group">
<div class="relative flex items-end overflow-hidden rounded-xl">
<iframe width="560" height="315" src="https://www.youtube.com/embed/Z9Aw8tTC2P8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
<h3 class="mt-6 leading-8 text-gray-900 group-hover:text-[#a92029] font-semibold text-2xl lg:text-[26px] line-clamp-3 transition translation-all duration-200 ease-in-out">
{post.title}
</h3>
</a>
<div class="mt-5">
<p class="mt-4 leading-normal line-clamp-3 text-lg text-gray-600">
{post.excerpt}

</p>
</div>					
</div>
    ))}
                  
</div>
</div>
</div>
    )
}
