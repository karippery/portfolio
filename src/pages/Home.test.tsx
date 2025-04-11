// __tests__/Home.test.tsx
import { render, screen } from '@testing-library/react';
import Home from '../pages/Home';
import { LanguageProvider } from '../context/LanguageContext';
import { translations } from '../translation/translations';

// Mock the Skills component
jest.mock('../components/Skills', () => () => <div data-testid="skills-component">Skills Component</div>);

// Mock the image import
jest.mock('../images/profile.png', () => 'profile-image-mock-url');

describe('Home Component', () => {
  const renderHome = (language: 'en' | 'de' = 'en') => {
    return render(
      <LanguageProvider defaultLanguage={language}>
        <Home />
      </LanguageProvider>
    );
  };

  test('renders without crashing', () => {
    renderHome();
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  test('displays profile image with correct alt text', () => {
    renderHome();
    const img = screen.getByAltText('John Raphy Karippery');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'profile-image-mock-url');
    expect(img).toHaveClass('rounded-full');
  });

  describe('English Content', () => {
    beforeEach(() => {
      renderHome('en');
    });

    test('renders welcome message', () => {
      expect(screen.getByText(translations.en.welcome)).toBeInTheDocument();
    });

    test('renders professional description', () => {
      expect(screen.getByText(translations.en.description)).toBeInTheDocument();
    });

    test('renders short profile text', () => {
      expect(screen.getByText(translations.en.shortProfile)).toBeInTheDocument();
    });

    test('renders personal details tags', () => {
      expect(screen.getByText(`📍 ${translations.en.location}`)).toBeInTheDocument();
      expect(screen.getByText(`📸 ${translations.en.hobbies.photography}`)).toBeInTheDocument();
      expect(screen.getByText(`🌍 ${translations.en.hobbies.travel}`)).toBeInTheDocument();
      expect(screen.getByText(`🎮 ${translations.en.hobbies.gaming}`)).toBeInTheDocument();
    });
  });

  describe('German Content', () => {
    beforeEach(() => {
      jest.clearAllMocks();
      renderHome('de');
    });

    test('matches snapshot for English', () => {
      const { asFragment } = renderHome('en');
      expect(asFragment()).toMatchSnapshot();
    });

    test('matches snapshot for German', () => {
      const { asFragment } = renderHome('de');
      expect(asFragment()).toMatchSnapshot();
    });
  });
});