import React from 'react'
import {GraphQLClient, gql} from 'graphql-request';

const graphcms= new GraphQLClient("https://api-ap-south-1.hygraph.com/v2/clg3fv2q0158501uhdz8m818r/master");

const QUERY=gql `
{
  posts(first: 1)
  {
    id,
    title,
    featuredimage {
      url
    },
    contents,
    content{html},
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

const Article = ({posts}) => {
  return (
    <>
<div className='bg-gray-50 mt-[50px] '>
<div className='container mx-auto '>

{posts.map((post)=>(

<div class="cursor-pointer rounded-xl bg-white p-5 shadow-lg hover:shadow-xl">
<a href="#" class="group">
<div class="relative flex items-end overflow-hidden rounded-xl">
<iframe width="80%" height="500" src={post.content.html} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
<h3 class="mt-6 leading-8 text-center text-gray-900 group-hover:text-[#a92029] font-semibold text-2xl lg:text-[30px] line-clamp-3 transition translation-all duration-200 ease-in-out">
{post.title}
</h3>
</a>
<div class="mt-5">
<p class="mt-4 leading-normal text-justify line-clamp-3 text-[16px] text-red-600">
{post.contents}
</p>
</div>					
</div>
    ))}
                  
</div>
</div>
</>
    )
}

export default Article