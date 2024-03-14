import React from 'react'
import Layout from '../components/layout'
import Button from '../components/button'
import ServiceCard from '../components/card/serviceCard'
import ProductCard from "../components/card/productCard"
import cardLogo from "../images/choice.png"
import TestimonialsCard from '../components/card/testimonialsCard'
import BlockTitle from '../components/BlockTitle'
import SearchBox from '../components/SearchBox'
import { Col, Row } from 'react-grid-system';
import ArticleCard from '../components/card/articleCard'

const Components = () => {
    return (
        <Layout pageClass="home-page">
            <section className='block-banner'>
                <div className="centered-content">
                    <h3>Typography</h3>
                    <hr />
                    <div>
                        <h1>Heading 1</h1>
                        <h2>Heading 2</h2>
                        <h3>Heading 3</h3>
                        <br />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus officia architecto at vero sit recusandae commodi voluptate, necessitatibus esse quis, vel fugit corrupti amet rerum fugiat ipsam provident dolorum harum voluptatem mollitia corporis in doloremque totam? Tempora, incidunt reiciendis esse, odit veniam repellendus reprehenderit animi eum, eligendi praesentium doloribus assumenda!</p>
                    </div>
                    <br />

                    <h3>SearchBox</h3>
                    <hr />
                    <SearchBox />

                    <h3>Buttons</h3>
                    <hr />
                    <p>Button Primary</p>
                    <Button btnText="learn more" className="btn-primary" />
                    <br />
                    <p>Button Secondary</p>
                    <Button btnText="Search" className="btn-secondary" />
                    <br />
                    <p>Button With Icon</p>
                    <Button btnText="Download" className="btn-secondary">
                    </Button>
                    <div>
                        <h3>Cards</h3>
                        <hr />
                        <Row>
                            <Col md={6} lg={4}>
                            <ServiceCard cardLogo={cardLogo} cardTitle="Many Choices" cardText="Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non. " />
                            </Col>
                        </Row>

                        <br />
                        <ProductCard />
                        <br />
                        <TestimonialsCard />
                    </div>


                    <br />

                    <h3>BlockTitle</h3>
                    <hr />
                    <BlockTitle className="startTitle" blockTitle="Benefits" blockSubtitle="Benefits when using our services" />
                    <BlockTitle className="centerTitle" blockTitle="Product" blockSubtitle="Our popular product" />
                    <br />
                    <h3>Article Card</h3>
                    <hr />    
                    <ArticleCard />         
                    </div>
            </section>

        </Layout>
    )
}

export default Components