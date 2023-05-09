import { useAuth } from 'hooks/useAuth';
import { Link, Box, Wrapper } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Wrapper>
        <Box>
          <Link to="/">Home</Link>
        </Box>
        {isLoggedIn && (
          <Box>
            <Link to="/contacts">Contacts</Link>
          </Box>
        )}
      </Wrapper>
    </nav>
  );
};
