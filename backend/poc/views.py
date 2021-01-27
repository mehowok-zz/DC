from rest_framework import views, response
from oct2py import octave

class Index(views.APIView):
    def post(self, request):
        a = int(request.data['a'])
        b = int(request.data['b'])
        res = []

        for i in range(11):
            res.append({'x': i, 'y': octave.calc(a, b, i)})
        return response.Response(res)
