// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom

import '@testing-library/jest-dom';
//beforeAll(() => {
//  window.matchMedia = jest.fn().mockImplementation(query => ({
//    matches: false,
//    media: query,
//    onchange: null,
//    addListener: jest.fn((listener) => {}),
//    removeListener: jest.fn((listener) => {}),
//    addEventListener: jest.fn((event, listener) => {}),
//    removeEventListener: jest.fn((event, listener) => {}),
//    dispatchEvent: jest.fn(),
//  }));
//});

//jest.mock('antd', () => {
//  // Mock the entire antd library
//  const antd = jest.requireActual('antd'); // This imports the real antd module
//
//  // Create a mock for only the Avatar component
//  const MockedAvatar = () => <div>Mocked Avatar</div>;
//
//  // Return the original antd module but overwrite the Avatar component
//  return {
//    ...antd,
//    Avatar: MockedAvatar,
//  };
//});
