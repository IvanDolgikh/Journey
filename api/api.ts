const baseUrl: string = 'http://localhost:8080/api'

const sendData = async <T>(url: string, data: T): Promise<T> => {
  try {

    const headers: Record<string, string> = { 'Content-Type': 'application/json' };

    if (localStorage.getItem('token')) {
      headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
    }

    const response: any = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(data)
    });
    if (response.ok) {
      const result: any = await response.json();
      return result;
    } else {
      const errorData: any = await response.json()
      throw new Error(errorData.errors);
    }
  } catch (errors: any) {
    throw errors;
  }
};

const getData = async <T>(url: string): Promise<T> => {
  try {
    const response: any = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    })

    if (response.ok) {
      const result: any = await response.json()
      return result
    } else {
      const errorData: any = await response.json()
      throw new Error(errorData.errors);
    }
  } catch (error: any) {
    throw error;
  }
}

export { sendData, getData, baseUrl }
