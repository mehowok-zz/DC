from rest_framework import views, response
from oct2py import octave

class Index(views.APIView):
    def post(self, request):
        a = int(request.data['a'])
        b = int(request.data['b'])
        res = [{'x': i, 'y': octave.calc(a, b, i)} for i in range(10)]
        return response.Response(res)
