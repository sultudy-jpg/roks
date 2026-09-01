import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the ROK Shipping homepage', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /결정적인 순간/ })).toBeDefined();
  expect(screen.getByText('프로젝트 지원 · 보증 화물')).toBeDefined();
  expect(screen.getByText(/NeoKorTrans와 그 전신인 KorTrans/)).toBeDefined();
  expect(screen.getByText(/B-1819, 19 Jongno/)).toBeDefined();
  expect(screen.getByRole('link', { name: /roks@roks.kr/ }).getAttribute('href')).toBe('mailto:roks@roks.kr');
});
