import { ProductList } from './ProductList'

export const RenderProduct = ({
  resultProductInfos,
  onRemove,
  viewModal,
  isShow,
  changeProduct,
}) => {
  return (
    <>
      {resultProductInfos?.map((resultProductInfo) => (
        <ProductList
          resultProductInfo={resultProductInfo}
          onRemove={onRemove}
          viewModal={viewModal}
          changeProduct={changeProduct}
          isShow={isShow}
        />
      ))}
    </>
  )
}
