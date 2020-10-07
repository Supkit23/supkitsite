from django.shortcuts import render

def index(request):
    return render (request, 'frontend/index.html')
def index2(request):
    return render (request, 'frontend/index2.html')