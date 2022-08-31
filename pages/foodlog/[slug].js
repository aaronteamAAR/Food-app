 import Head from 'next/head'
 import Link from 'next/link'

import  {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient()


export default function foodlog({foodlog}) {

    return (
        <div>
            <Head>
        <title>{foodlog.Mealtype}</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css" />
          </Head>

          <div class="columns mt-6 is-centered">
              <div class="column is-one-third">
                  <nav class="panel is-link">
                        <p class="panel-heading">
                        <h2>{foodlog.Mealtype}</h2>
                        </p>

                        <div class="panel-block">
                        <p><b>Calories: </b>{foodlog.Calories}</p>
                        </div>
                        <div class="panel-block">
                        <p><b>Protein: </b>{foodlog.Protein}</p>
                        </div>
                        <div class="panel-block">
                        <p><b>Carbohydrates: </b>{foodlog.Carbohydrates}</p>
                        </div>
                        <div class="panel-block">
                       <p><b>Fat: </b>{foodlog.Fat}</p>
                       </div>
                  </nav>
                  </div>
                  </div>
            </div>
        
    )
}


export async function getServerSideProps(context) {
    const { slug } = context.query


    const foodlog = await prisma.foodlog.findFirst({
        where: {
            slug: slug
        }

})

    return {
        props: {
            foodlog
        }
    }
}