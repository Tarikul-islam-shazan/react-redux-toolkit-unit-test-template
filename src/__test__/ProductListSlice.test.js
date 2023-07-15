import { productsReducer, initialState, addProduct } from "../store/slices/features/product/productsSlice";
describe("Test ProductsSlice",()=> {
    test("initialize slice with initialValue", () => {
        const productSliceInit = productsReducer(initialState, { type: "unknown" });
        expect(productSliceInit).toBe(initialState);
      });

      test("Test addProduct()",()=> {

        const testProduct = {
            productName: "Phone",
            price: 500,
          };

          const afterReducerOperation = productsReducer(
            initialState,
            addProduct(testProduct)
          );

          expect(afterReducerOperation).toEqual({data:[testProduct]});
      })
})
