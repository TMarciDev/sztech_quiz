#ifndef header
#include <typeinfo>
#define header

#include <vector>
#include <map>
template <typename T>
class prefix_vector
{
private:
public:
	std::vector<T> *vector_base;
	std::vector<T> vector_extended;
	std::map<int, T> map_base;

	prefix_vector(std::vector<T> &v) : vector_base(&v) {}
	prefix_vector(prefix_vector<T> &p_v)
	{
		vector_base = p_v.vector_base;
	}

	template <size_t N>
	prefix_vector(T (&arr)[N])
	{
		vector_base = new std::vector<T>();
		vector_base->reserve(N);

		for (const auto &element : arr)
		{
			vector_base->push_back(element);
		}
	}

	// std::vector<T> operator=(const prefix_vector<T> p_v)
	// {

	// }
	operator std::vector<T>() const
	{
		std::vector<T> emptyVector;
		return emptyVector;
	}

	void set(int idx, T elem)
	{
		const int baseSize = vector_base->size();
		if (baseSize > idx)
		{
			map_base[idx] = elem;
		}
		else
		{
			vector_extended.at(idx - baseSize) = elem;
		}
	}

	void push_back(T elem)
	{
		vector_extended.push_back(elem);
	}

	T &at(const int idx)
	{
		if (map_base.find(idx) != map_base.end())
		{
			return map_base[idx];
		}
		const int baseSize = vector_base->size();
		if (baseSize > idx)
		{
			return vector_base->at(idx);
		}
		else
		{
			return vector_extended.at(idx - baseSize);
		}
	}

	int size()
	{
		return vector_base->size() + vector_extended.size();
	}

	// ~prefix_vector()
	// {
	// 	//delete vector_base;
	// }
};

#endif