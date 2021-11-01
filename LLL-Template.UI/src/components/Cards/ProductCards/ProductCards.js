// 

// 

//   return (
//     <Card>
//       <CardImg top width='100%' src={project.screenshot} alt='Card image cap' />
//       <CardBody>
//         <CardTitle tag='h5'>{project.title}</CardTitle>
//         <CardText>{project.description}</CardText>
//         <CardText>{project.techUsed}</CardText>
//         <CardLink href={project.netlifyLink}>View Live Project</CardLink>
//         <CardLink href={project.githubLink}>View GitHub Repo</CardLink>
//         <CardLink href={project.loomLink}>View Project Video</CardLink>
//         <Button color='danger' onClick={() => handleClick('delete')}>
//           Delete Project
//         </Button>
//         <Button color='info' onClick={() => handleClick('update')}>
//           {updating ? 'Close Form' : 'Update Project'}
//         </Button>
//         {updating && (
//           <ProjectForm
//             formTitle='Update Project'
//             setProjects={setProjects}
//             firebaseKey={project.firebaseKey}
//             title={project.title}
//             screenshot={project.screenshot}
//             netlifyLink={project.netlifyLink}
//             githubLink={project.githubLink}
//             loomLink={project.loomLink}
//             description={project.description}
//             techUsed={project.techUsed}
//           />
//         )}
//       </CardBody>
//     </Card>
//   );
// };

// UpdateProjectCards.propTypes = {
//   project: PropTypes.object,
//   setProjects: PropTypes.func,
// };

// export default UpdateProjectCards;
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  ProductContainer,
  ProductWrapper,
  Column1,
  ProductCard,
  ProductCardImg,
  ProductCardHeader,
  ProductCardButtons,
  ProductCardEdit,
  ProductCardDelete,
  ProductCardBody,
  CardTitle,
  CardText,
} from './ProductCardElements';
import { deleteProduct } from '../../../helpers/data/ProductsData';
import ProductForm from "../../Forms/ProductForms/ProductForm";

const ProductCards = ({
  product,
  setProducts
}) => {
  const [updating, setUpdating] = useState(false);

  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        deleteProduct(product.productId)
          .then(setProducts);
        break;
      case 'update':
        setUpdating((prevState) => !prevState);
        break;
      default:
        console.warn('nothing selected');
    }
  };

  return (
  <ProductContainer className="ProductContainer">
    <ProductWrapper className="ProductWrapper" id="Products">
      <Column1 className="Column1">
        <ProductCard>
          <ProductCardHeader className="ProductCardHeader">
            <ProductCardButtons className="ProductCardButtons">
              <ProductCardEdit
                className="ProductCardEdit"
                // src={edit}
              ></ProductCardEdit>
              <ProductCardDelete
                className="ProductCardDelete"
                // src={deleted}
              ></ProductCardDelete>
            </ProductCardButtons>
          </ProductCardHeader>
          <ProductCardImg
            className="product-image"
            src={product.productImageURL}
            alt="Product Card image cap"
          />
          <ProductCardBody>
            <CardTitle tag="h5">{product.productName}</CardTitle>
            <CardText>{product.productDescription}</CardText>
            <CardText>{product.price}</CardText>
            <Button color='danger' onClick={() => handleClick('delete')}>
           Delete Project
         </Button>
         <Button color='info' onClick={() => handleClick('update')}>
           {updating ? 'Close Form' : 'Update Project'}
         </Button>
         {updating && (
          <ProjectForm
            formTitle='Update Project'
            setProjects={setProjects}
            firebaseKey={project.firebaseKey}
            title={project.title}
            screenshot={project.screenshot}
            netlifyLink={project.netlifyLink}
            githubLink={project.githubLink}
            loomLink={project.loomLink}
            description={project.description}
            techUsed={project.techUsed}
          />
        )}
          </ProductCardBody>
        </ProductCard>
      </Column1>
    </ProductWrapper>
  </ProductContainer>
);

ProductCards.propTypes = {
  product: PropTypes.object,
};

export default ProductCards;
