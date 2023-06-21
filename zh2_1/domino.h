#ifndef header
// #include <typeinfo>
#define header

#include <list>
#include <utility>

template <typename T>
class domino
{
private:
    std::list<T> line;

public:
    domino(std::pair<T, T> pair)
    {
        line.push_back(pair.first);
        line.push_back(pair.second);
    }

    //* push_back
    bool operator>>(std::pair<T, T> const &pair)
    {
        return push_back(pair);
    }

    //* push_front
    bool operator<<(std::pair<T, T> const &pair)
    {
        return push_front(pair);
    }

    //* push_front
    friend bool operator>>(std::pair<T, T> const &pair, domino<T>& d)
    {
        return d.push_front(pair);
    }
    //* push_back
    friend bool operator<<(std::pair<T, T> const &pair, domino<T>& d)
    {
        return d.push_back(pair);
    }

    bool push_back(std::pair<T, T> pair)
    {
        if (line.back() == pair.first)
        {
            line.push_back(pair.second);
            return true;
        }
        else if (line.back() == pair.second)
        {
            std::swap(pair.first, pair.second);
            line.push_back(pair.second);
            return true;
        }
        return false;
    }

    bool push_front(std::pair<T, T> pair)
    {
        if (line.front() == pair.second)
        {
            line.push_front(pair.first);
            return true;
        }
        else if (line.front() == pair.first)
        {
            std::swap(pair.first, pair.second);
            line.push_front(pair.first);
            return true;
        }
        return false;
    }
    int size() const
    {
        return line.size() - 1;
    }
};

#endif