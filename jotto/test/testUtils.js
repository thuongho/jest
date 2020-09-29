import checkPropType from 'check-prop-types';
/**
 * Return node(s) with the given data-test attribute.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper.
 * @param {string} val - Value of data-test attribute for search.
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

/**
 * Returns an assertion
 * @param {FC.component} component - React component
 * @param {object} conformingProps - props
 */
export const checkProps = (component, conformingProps) => {
  // checkPropType returns an error if propTypes is not correct prop type
  const propError = checkPropType(
    component.propTypes,
    conformingProps,
    'prop',
    component.name
  );
  expect(propError).toBeUndefined();
};
